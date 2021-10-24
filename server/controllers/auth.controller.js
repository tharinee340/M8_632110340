
const axios = require('axios')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports =  {
    facebook: async (req, res, next) => {
        try {
            const email = req.body.user.email
           const response = await axios({
            method: 'get',
            url: `https://graph.facebook.com/v6.0/oauth/access_token?grant_type=fb_exchange_token&client_id=444609017082568
            &client_secret=32abf61eaa3b80d2690aa4a9dd4cdbfa&fb_exchange_token=${req.body.user.accessToken}`
          })
          
          const result = response.data //เก็บ res data ไว้ใน result
          const Auth = await axios({
            method: 'get',
            url: `https://graph.facebook.com/me?access_token=${result.access_token}`
          })
          if(Auth) {
            let find = await User.findOne({email})
            if(find){ //ดูว่า user มีในฐานข้อมูลเรามั้ยถ้ามีก็จะ sign token เลยไม่เก็บซ้ำใหม่
                const token = jwt.sign({_id:find._id}, 'id_key_account', {expiresIn: '1d' })
                const {_id,name,email} = find;
                res.status(200).json({token,user:{_id,name,email}})
            }else{
                
                let users = new User({name:Auth.data.name,email,type_account:"Facebook"})
                console.log(users)
                await users.save(async (err, data) => {
                    if (err){
                      return res.status(400).json({error:"Something went worng..."})
                    }
                    const token = jwt.sign({_id:data._id}, 'id_key_account', {expiresIn: '1d' })
                    const {_id,name,email} = users;
                    res.status(200).json({token,user:{_id,name,email}})
                  });
            }

          } else {

          }

        } catch(err) {

        }
    }
}