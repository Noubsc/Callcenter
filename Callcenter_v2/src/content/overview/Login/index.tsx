import {
    Box,
    Button,
    Container,
    Grid,
    Typography,
    TextField
  } from '@mui/material';

import React, {useState} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Globalstyle } from 'src/fonts/GlobalStyle';



 
 
  
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

    
  const [User,setUser] = useState(undefined);
  const [Pwd, setPwd] = useState(undefined);


    const handleISubmit = (e) =>{
      e.preventDefault();      
      const data = {

          id: new Date(),
          User,
          Pwd

      }
  
      console.log("test", data);
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
            <form  onSubmit={handleISubmit} >
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
                    required   
                    helperText = {"Invalid User"}  
                    error = {false}
                    ref={(input) => setUser(input)}
                   
                    />
                    <br/>
                    <TextField    
                    color='secondary'                   
                    id="pwd"
                    label="ລະຫັດ"
                    placeholder="ລະຫັດ"  
                    focused  
                    required 
                    helperText = {"Invalid Password"}  
                    error = {false}     
                    ref={(input) => setPwd(input)}   
                    />
                </div>
                <br/>
                <Button
              type="submit"
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
                </form>
           

            
            
          
          </Grid>
        </Grid>
      </Container>
    );
  }
  
  export default Login;
  

  