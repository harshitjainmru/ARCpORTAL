export const validationMessage =
{

  email:[
    {type:'required',message:'Email is required'},
    {type:'pattern',message:'Enter a valid email'}
  ],
  password:[
    {type:'required',message:'Password is required'},
    {type:'pattern',message:'Please enter minimum 8 character password with atleast 1 upper case, 1 lower case & 1 special character. '}
  ],
  cnfPassword:[
    {type:'required',message:'Confirm Password is required'},
  ],
  name:[
    {type:'required',message:'Please enter the required field'},
    {type:'pattern',message:'Only alphabets are allowed!!'},
    {type:'length',message:'Name should contain 3 characters'}
  ],
  Email:[
    {type:'required',message:'Please enter the required field'},
    {type:'pattern',message:'Enter a valid email'}
  ],
}
