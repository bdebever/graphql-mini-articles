import React, {
    Component
} from 'react';
import {
  Form, Input, Icon, Button, Divider
} from 'antd';
import Categories from './Categories';
import CreateArticle from './CreateArticle';

const { TextArea } = Input;

let id = 0;

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 24, offset: 0 },
  },
};

class DynamicFieldSet extends Component {
  remove = (k) => {
    const { form } = this.props;

    const keys = form.getFieldValue('keys');
    const paragraphes = form.getFieldValue('paragraphes');

    // We need at least one paragraph
    if (keys.length === 1) {
      return;
    }

    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
      paragraphes: paragraphes.splice(k)
    });
  }

  handleChangeCat = (categories) => {
    this.props.form.setFieldsValue({
      categories
    });
  }

  add = () => {
    const { form } = this.props;

    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(++id);

    form.setFieldsValue({
      keys: nextKeys,
    });
  }

  handleSubmit = (value) => {
    this.props.onSubmitted(value);
    console.log(this.props.form.getFieldsValue());
  }

  render() {

    const { getFieldDecorator, getFieldValue } = this.props.form;

    getFieldDecorator('keys', { initialValue: [id] });

    const keys = getFieldValue('keys');

    const formItems = keys.map((k, index) => (
      <Form.Item
        {...formItemLayoutWithOutLabel}
        required={false}
        key={k}
      >
        {getFieldDecorator(`paragraphes[${k}]`, {
          validateTrigger: ['onChange', 'onBlur'],
          rules: [{
            required: true,
            whitespace: true,
            message: "Please input the paragraph content delete this field.",
          }],
        })(
          <TextArea placeholder="Paragraph content"
          autosize={{ minRows: 2, maxRows: 6 }} style={{ width: '95%', marginRight: 8 }}/>
        )}
        {keys.length > 1 ? (
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            disabled={keys.length === 1}
            onClick={() => this.remove(k)}
          />
        ) : null}
      </Form.Item>
    ));

    return (
      <Form>
        <Form.Item {...formItemLayoutWithOutLabel}>
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Enter the article title please!' }],
          })(
            <Input placeholder="Article title" />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayoutWithOutLabel}
          hasFeedback
        >
          {this.props.form.getFieldDecorator('categories', {
            rules: [
              { required: true, message: 'Please select at least a category!' },
            ],
          })(
            <Categories onCategorySelected={this.handleChangeCat}></Categories>
          )}
        </Form.Item>
        <Divider orientation="left">Add your paragraphes</Divider>
        {formItems}
        <Form.Item {...formItemLayoutWithOutLabel}>
          <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
            <Icon type="plus" /> Add field
          </Button>
        </Form.Item>
        <Form.Item {...formItemLayoutWithOutLabel} style={{ textAlign: 'right' }}>
          <CreateArticle
            form={this.props.form}
            onSubmitted={this.handleSubmit}
          >
          </CreateArticle>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedDynamicFieldSet = Form.create()(DynamicFieldSet);
export default WrappedDynamicFieldSet;