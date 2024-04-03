import { Grid, Button, TextField, Container } from "@mui/material";
import { Form } from "react-router-dom";
import { Controller, useForm} from "react-hook-form";




function Contact() {

  const {control, handleSubmit, formState:{errors}} = useForm<IFormInput>();


  interface IFormInput {
    fullName: string;
    subject: string;
    mail: string;
    message: string;
  }
  
  const onSubmit = (data: IFormInput) => {
    console.log(data);
  }
    return ( 
      <Container maxWidth="lg">
      <Grid container direction={"column"} justifyContent={"center"}>

        <h1>Contact</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction={"column"} spacing={2} gap={2}>
            <Controller control={control} name="fullName" rules={{required: "Name is requierd", minLength: {value: 3, message: "Must be at least 3 characters"}}} render={({field:{ onChange, value}}) => 
                <TextField type="text" variant="outlined" label="Full Name" onChange={onChange} value={value}  helperText={errors.fullName ? errors.fullName.message : ''}/>
            } />
            <Controller control={control} name="subject" rules={{required: "Subject is requierd", minLength: {value: 3, message: "Must be at least 3 characters"}}} render={({field:{ onChange, value}}) => 
                <TextField type="text" variant="outlined" label="Subject" onChange={onChange} value={value}  helperText={errors.subject ? errors.subject.message : ''}/>
            } />
            <Controller control={control}  name="mail" rules={{required: "Email is requierd",pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "invalid email address"
    }}} render={({field:{ onChange, value}}) => 
                <TextField  variant="outlined" label="Mail" onChange={onChange} value={value}  helperText={errors.mail ? errors.mail.message : ''}/>
            } />
            <Controller control={control} name="message" rules={{required: "Message is requierd", minLength: {value: 3, message: "Must be at least 3 characters"}}} render={({field:{ onChange, value}}) => 
                <TextField type="text" variant="outlined" label="Message" onChange={onChange} value={value}  helperText={errors.message ? errors.message.message : ''}/>
            } />

        <Button   type="submit" variant="contained" color="primary">Submit</Button>
        </Grid>

        </Form>
      </Grid>
      </Container>



     );
}

export default Contact;