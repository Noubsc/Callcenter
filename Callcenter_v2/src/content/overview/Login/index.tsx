import {
    Box,
    Button,
    Container,
    Grid,
    Typography,
    TextField
  } from '@mui/material';

import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import { Globalstyle } from 'src/fonts/GlobalStyle';
import axios from 'axios';



 
 
  
  const TypographyH1 = styled(Typography)(
    ({ theme }) => `
      font-size: ${theme.typography.pxToRem(30)}; 
   
         
  `
  );
  
  const TypographyH2 = styled(Typography)(
    ({ theme }) => `
      font-size: ${theme.typography.pxToRem(17)};
  `
  );
  
  const LabelWrapper = styled(Box)(
    ({ theme }) => `
      background-color: ${theme.colors.success.main};
      color: ${theme.palette.success.contrastText};
      font-weight: bold;
      border-radius: 30px;
      text-transform: uppercase;
      display: inline-block;
      font-size: ${theme.typography.pxToRem(11)};
      padding: ${theme.spacing(.5)} ${theme.spacing(1.5)};
      margin-bottom: ${theme.spacing(2)};
  `
  );
  
  const MuiAvatar = styled(Box)(
    ({ theme }) => `
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      border-radius: ${theme.general.borderRadius};
      background-color: #e5f7ff;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto ${theme.spacing(2)};
  
      img {
        width: 60%;
        height: 60%;
        display: block;
      }
  `
  );
  
  const TsAvatar = styled(Box)(
    ({ theme }) => `
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      border-radius: ${theme.general.borderRadius};
      background-color: #dfebf6;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto ${theme.spacing(2)};
  
      img {
        width: 60%;
        height: 60%;
        display: block;
      }
  `
  );
  
  function Login() {
  const navigate = useNavigate();
  const ditpatch = useDispatch();
    
  const [User, setUser] = useState("sengkham");
  const [Pwd, setPwd] = useState("123");
  const [Error, setError] = useState("");
  const url = 'https://waiwa-api.laoapps.com/api/v1/callcenter/';

    const handleISubmit = (e) =>{
      
      if(User ==="sengkham" && Pwd === "123"){

        const header= {
          'Content-Type': 'application/json',
          'Authorization': 'dba123456',
          'Token' : 'c0bab0a1-8f1e-4735-95d2-ec362d8ce407'
        }   
    
        axios.get(url.concat('default'),{headers:header})
         .then(res => {
            const result =  res;
            if(result.data.status === 1 && result.data.data.isActive === true){
            //localStorage.setItem('users', JSON.stringify(result.data.data));         
            console.log('Users',result.data.data);

           
            ditpatch({
              type : 'LOGIN',
              payload : result.data.data
          });
            navigate('/dashboards/crypto', { replace: true });				
            }
            else{
               
                    // setErrors({ submit: res.data.data.message });
                    setError(res.data.data.message);
       
            }
          console.log('Login',res);
         });
        

      }
      else{
        setError("* Please your User and Password again.");

      }
     // console.log(`user : ${ User} and ${Pwd}`);
     
    }
   
  
    return (
    
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>

        <Grid spacing={{ xs: 6, md: 10 }} justifyContent="center" alignItems="center" container>
          <Grid item md={10} lg={8} mx="auto">
            <LabelWrapper color="success">Version 1.0</LabelWrapper>
            <TypographyH1 sx={{ mb: 2 }} variant="h1" >
             Waiwa ( ໄວວາ ) ບໍລິການຂົນສົ່ງ
            </TypographyH1>
            <Globalstyle />
            <TypographyH2
              sx={{ lineHeight: 1.5, pb: 4 }}
              variant="h4"
              color="text.secondary"
              fontWeight="normal"     
             
            >
             ລະບົບຈັດການໜ້າວຽກການຂົນສົ່ງຂອງ Rider
            </TypographyH2>
      
            <Box 
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <div>
                    <TextField         
                    color='secondary'           
                    id="usr"
                    label="ຊື່ຜູ້ໃຊ້"
                    placeholder='ຊື່ຜູ້ໃຊ້້'
                    focused       
                    value={User}            
                    required       
                    error = {false}
                    onChange= {(e) => setUser(e.target.value)}
                   
                    />
                    <br/>
                    <TextField    
                    color='secondary'                   
                    id="pwd"
                    label="ລະຫັດ"
                    placeholder="ລະຫັດ" 
                    type="password"
                    value={Pwd}                 
                    focused  
                    required                     
                    error = {false}     
                   onChange = {(e) => setPwd(e.target.value)}  
                    />
                </div>
                <br/>
                <TypographyH2
              sx={{ lineHeight: 1.5, pb: 4 }}
              variant="h4"
              color="red"
              fontWeight="normal"    
               
             
            >
             {Error}
            </TypographyH2>
                <Button
                type='button'
                onClick={handleISubmit}
              /*
              component={RouterLink}
              to="/dashboards/crypto"
              size="large"
              
              */
              variant="contained"
            >
              ເຂົ້າລະບົບ
            </Button>
                </Box>
              
           

            
            
          
          </Grid>
        </Grid>
      </Container>
    );
  }
  
  export default Login;
  

  