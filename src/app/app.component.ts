import { Component } from '@angular/core';
import {ApiService} from './services/api.service';
import {IFormData} from '../../Interfaces/IFormData';
import {IForm} from '../../Interfaces/IForm';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {each, find} from 'lodash';
import {IColumn} from '../../Interfaces/IColumn';
import {IInput} from '../../Interfaces/IInput';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public formData: IFormData;
  public formModel = {};
  public formConfig: IForm;
  public form = new FormGroup({});
  public fields: FormlyFieldConfig[] = [];

  constructor(
    private apiService: ApiService
  ) { }

  async setValue() {
    this.formData = await this.apiService.getFormData().toPromise();
    each(this.formConfig, (column: IColumn, index) => {
      each(column.inputs, (input: IInput) => {
        let inputData = find(this.formData.data, {id: input.id});
        inputData = inputData || '';
        this.form.get(index).get(input.id).setValue(inputData.value);
        this.formModel[index][input.id] = inputData.value;
      });
    });
  }

  async mapConfig() {
    this.fields.length = 0;
    this.formConfig = null;
    this.formModel = {};
    this.formConfig = await this.apiService.getFormConfig().toPromise();

    each(this.formConfig, (column: IColumn, index) => {
      const columnFieldGroup: FormlyFieldConfig = {
        key: index,
        className: 'group-classname',
        fieldGroup: [],
      };

      each(column.inputs, (input: IInput) => {
        columnFieldGroup.fieldGroup.push({
          key: input.id,
          id: input.id,
          type: this.getType(input.inputType),
          defaultValue: '',
          templateOptions: {
            type: this.getTemplateType(input.inputType),
            label: input.text
          }
        });
      });

      this.fields.push(columnFieldGroup);
    });
  }

  getType(inputType: string) {
    const inputTypes = {
      String: 'input',
      Int: 'input',
      Boolean: 'checkbox',
    };
    return inputTypes[inputType];
  }

  getTemplateType(inputType: string) {
    const inputTypes = {
      String: 'text',
      Int: 'number'
    };
    return inputTypes[inputType];
  }
}
