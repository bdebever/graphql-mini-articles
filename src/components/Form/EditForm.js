import React, {
    Component
} from 'react';
import {
  Form, Input, Icon, Button, Divider, message
} from 'antd';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const { TextArea } = Input;

const EDIT_PARAGRAPH_MUTATION = gql `
  mutation upsertParagraph($id: ID, $content: String!, $order: Int, $articleId: String) {
    upsertParagraph(id: $id, content: $content, order: $order, articleId: $articleId) {
      id,
      content,
      order
    }
  }
`

const DELETE_PARAGRAPH_MUTATION = gql `
  mutation deleteParagraph($id: ID!) {
    deleteParagraph(id: $id) {
      id
    }
  }
`


let id = 0;

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 24, offset: 0 },
  },
};

class EditForm extends Component {
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

  add = () => {
    const { form } = this.props;

    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(++id);

    form.setFieldsValue({
      keys: nextKeys,
    });
  }

  render() {

    const { getFieldDecorator, getFieldValue } = this.props.form;
    const { article } = this.props;

    getFieldDecorator('keys', { initialValue: article.paragraphes.map((val, index) => index) });
    getFieldDecorator('title', { initialValue: article.title });

    const keys = getFieldValue('keys');
    // We set initial value of ids
    id = keys.length - 1;

    const formItems = keys.map((k, index) => {
      let existingItem = article.paragraphes[k];
      return (
          <Mutation mutation={EDIT_PARAGRAPH_MUTATION} key={k}
            onCompleted={() => message.success('Paragraph updated')}
          >
            {(updateParagraph, { error } )=> (
              <Form.Item
                {...formItemLayoutWithOutLabel}
                required={false}
              >
                {getFieldDecorator(`paragraphes[${k}]`, {
                  validateTrigger: ['onChange', 'onBlur'],
                  rules: [{
                    required: true,
                    whitespace: true,
                    message: "Please input the paragraph content delete this field.",
                  }],
                  initialValue: existingItem ? existingItem.content : ''
                })(
                  <TextArea
                  data-id={existingItem ? existingItem.id : ''}
                  data-order={existingItem ? existingItem.order : keys.length-1}
                  placeholder="Paragraph content"
                  autosize={{ minRows: 2, maxRows: 6 }}
                  style={{ width: '95%', marginRight: 8 }}
                  onBlur={async (e) => {
                    const mutation = await updateParagraph({ variables: {
                      content: e.target.value,
                      id: e.target.dataset.id,
                      order: parseInt(e.target.dataset.order),
                      articleId: article.id
                    } });
                    if (error) console.error(error);
                  }}
                  />
                )}
                {keys.length > 1 ? (
                  <Mutation mutation={DELETE_PARAGRAPH_MUTATION} key={k}
                    onCompleted = {() => message.success('Paragraph deleted')}>
                    {(deleteParagraph, { error } )=> (
                      <Icon
                        data-id={existingItem ? existingItem.id : ''}
                        className="dynamic-delete-button"
                        type="minus-circle-o"
                        disabled={keys.length === 1}
                        onClick={async (e) => {
                          this.remove(k);
                          let id = e.currentTarget.dataset.id;
                          if (!id) return;
                          const mutation = await deleteParagraph({variables: {id}});
                          if (error) console.error(error);
                        }}
                      />
                    )}
                  </Mutation>
                ) : null}
              </Form.Item>
            )}
          </Mutation>
    )});

    return (
      <Form>
        <Form.Item {...formItemLayoutWithOutLabel}>
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Enter the article title please!' }],
          })(
            <Input placeholder="Article title" />
          )}
        </Form.Item>
        <Divider orientation="left">Paragraphes</Divider>
        {formItems}
        <Form.Item {...formItemLayoutWithOutLabel}>
          <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
            <Icon type="plus" /> Add field
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedDynamicEditForm = Form.create()(EditForm);
export default WrappedDynamicEditForm;