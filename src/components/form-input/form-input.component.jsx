import React from 'react';
 import './form-input.styles.scss';

 const FormInput =({handleChange, label, ...otherProps})=>(

    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps}></input>
        {
            label ? 

            // this line indicates that when user will type something shrink word will be added to the class  name
            (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label `}>   
            {label}
 

            </label>)
            :null
        }
    </div>
 )

 export default FormInput;
 