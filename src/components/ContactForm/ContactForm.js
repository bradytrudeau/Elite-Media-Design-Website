import React, {useState} from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import './ContactForm.css';


function ContactForm() {

  return (
    <div id='contact' className='contact-form'>
      <form>
        <h2>Contact Us</h2>
        <div>
          <TextField id="outlined-basic"
            className='input' 
            style={{width: '100%'}}
            label="Name" 
            variant="outlined" 
            required>
          </TextField>
        </div>
        <div>
          <TextField id="outlined-basic"
            className='input' 
            style={{width: '100%'}}
            label="Email Address" 
            variant="outlined" 
            required>
          </TextField>
        </div>
        <div>
          <TextField id="outlined-basic"
            className='input' 
            style={{width: '100%'}}
            label="Message" 
            variant="outlined"
            multiline
            rows={4} 
            required>
          </TextField>
        </div>
        <div>
            <Button variant='contained' 
              color='primary'
              size= 'large'
              style={{margin: '10px', color: 'white', background: '#F0AD4E'}}
              onClick=''>
              Submit
            </Button> 
        </div>
      </form>

    </div>
  );
} 



export default ContactForm;