// @ts-ignore
import {IForm} from '../Interfaces/IForm';


export const formConfig: IForm = {
  column1: {
    inputs:  [
      {
        id: 'firstName',
        inputType: 'String',
        text: 'First Name'
      },
      {
        id: 'lastName',
        inputType: 'String',
        text: 'Last Name'
      },
      {
        id: 'age',
        inputType: 'Int',
        text: 'Age'
      },
      {
        id: 'status',
        inputType: 'String',
        text: 'Status'
      }
    ]
  }, column2: {
    inputs: [
      {
        id: 'address',
        inputType: 'String',
        text: 'Address'
      },
      {
        id: 'height',
        inputType: 'Int',
        text: 'Height'
      },
      {
        id: 'isAdmin',
        inputType: 'Boolean',
        text: 'Is Admin'
      }
    ]
  }
};

module.exports = { formConfig };
