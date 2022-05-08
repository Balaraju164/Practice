import React from 'react';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
const initialValues = {
  id: '',
  firstName: '',
  lastName: '',
  address: '',
  country: '',
};

const Form = () => {
  const [formData, setFormData] = useState(initialValues);
  const [dataCollection, setDataCollection] = useState([]);
  const [dataCollection1, setDataCollection1] = useState([]);

  //   useEffect(() => {
  //     localStorage.setItem('data', JSON.stringify(dataCollection));
  //   }, [dataCollection]);

  useEffect(() => {
    let items = localStorage.getItem('data');
    if (items) {
      setDataCollection1(JSON.parse(items));
    }
  }, [dataCollection]);

  const submitHandler = (e) => {
    e.preventDefault();
    const existed = dataCollection.find((data) => data.id === formData.id);
    if (existed) {
      let newData = dataCollection.map((data) =>
        data.id === formData.id ? formData : data
      );
      setDataCollection([...newData]);
      localStorage.setItem('data', JSON.stringify([...newData]));
    } else {
      let newFormData = { ...formData, id: uuidv4() };
      setDataCollection([...dataCollection, newFormData]);
      localStorage.setItem(
        'data',
        JSON.stringify([...dataCollection, newFormData])
      );
    }
    setFormData({
      firstName: '',
      lastName: '',
      address: '',
      country: '',
      id: '',
    });
  };

  //console.log(formData);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const editHandler = (id) => {
    let result = dataCollection1.find((data) => data.id === id);
    setFormData(result);
  };

  return (
    <>
      <div className='dataTittle'>Know Yourself</div>
      <div className='dataSubTittle'>Come And Enjoy</div>
      <div className='formContainer'>
        <form onSubmit={submitHandler} className='form' id='forms'>
          <div className='title'>Welcome</div>
          <div className='subtitle'>Let's create your account!</div>
          <div className='input_data'>
            <label htmlFor='firstname' className='label'>
              FirstName:
            </label>
            <input
              type='text'
              id='firstname'
              name='firstName'
              value={formData.firstName}
              onChange={changeHandler}
              className='text_input'
            />
          </div>
          <div className='input_data'>
            <label htmlFor='lastname' className='label'>
              LastName:
            </label>
            <input
              type='text'
              id='lastname'
              name='lastName'
              value={formData.lastName}
              onChange={changeHandler}
              className='text_input'
            />
          </div>
          <div className='input_data'>
            <label htmlFor='address' className='label'>
              Address:
            </label>
            <input
              type='text'
              id='address'
              name='address'
              value={formData.address}
              onChange={changeHandler}
              className='text_input'
            />
          </div>
          <div className='input_data'>
            <label htmlFor='country' className='label'>
              Country:
            </label>
            <input
              type='text'
              id='country'
              name='country'
              value={formData.country}
              onChange={changeHandler}
              className='text_input'
            />
          </div>
          <button type='submit' className='btn'>
            Submit
          </button>
        </form>
      </div>

      <div className='dataContaier'>
        <div className='dataTittle'>Our Memebers</div>
        <div className='dataSubTittle'>A place where full of happyiness</div>
        <div className='dataHeaders'>
          <div className='dataLabel'>FirstName</div>
          <div className='dataLabel'>LastName</div>
          <div className='dataLabel'>Address</div>
          <div className='dataLabel'>Country</div>
          <div className='dataLabel'></div>
        </div>
        {dataCollection1 &&
          dataCollection1.map((data, index) => {
            return (
              <div className='data' key={index}>
                <div className='dataLabel'>
                  {data.firstName ? data.firstName : 'No FirstName'}
                </div>
                <div className='dataLabel'>
                  {data.lastName ? data.lastName : 'No LastName'}
                </div>
                <div className='dataLabel'>
                  {data.address ? data.address : 'No address'}
                </div>
                <div className='dataLabel'>
                  {data.country ? data.country : 'No country'}
                </div>
                <div className='dataLabel'>
                  <button
                    onClick={() => editHandler(data.id)}
                    className='editButton'
                  >
                    Edit
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Form;
