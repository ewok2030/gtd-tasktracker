import React from 'react';
// import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

const renderField = field => (
  <div className="form-group">
    <label htmlFor={field.label}>{field.label}</label>
    <input {...field.input} className="form-control" />
    {field.touched && field.error && <div className="error">{field.error}</div>}
  </div>
);

const renderSelect = field => (
  <div className="form-group">
    <label htmlFor={field.label}>{field.label}</label>
    <select {...field.input} className="form-control">
      {field.children}
    </select>
    {field.touched && field.error && <div className="error">{field.error}</div>}
  </div>
);

const renderTextArea = field => (
  <div className="form-group">
    <label htmlFor={field.label}>{field.label}</label>
    <textarea {...field.input} className="form-control" />
  </div>
);

@reduxForm({ form: 'TaskEditor', enableReinitialize: true })
export default class TaskEditor extends React.Component {
  static propTypes = {
    onSave: React.PropTypes.func.isRequired,
    statusList: React.PropTypes.array.isRequired,

    // http://redux-form.com/6.0.0-rc.3/docs/api/ReduxForm.md/
    initialValues: React.PropTypes.shape({
      _id: React.PropTypes.string.isRequired,
      title: React.PropTypes.string.isRequired,
      status: React.PropTypes.string.isRequired,
      description: React.PropTypes.string }),
    handleSubmit: React.PropTypes.func.isRequired,
    reset: React.PropTypes.func.isRequired,
    pristine: React.PropTypes.bool.isRequired,
    invalid: React.PropTypes.bool.isRequired,
  }

  render() {
    const { pristine, reset, invalid, handleSubmit, onSave } = this.props;
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <strong>Task Editor</strong>
          <span className="pull-right text-muted">
            <small>{this.props.initialValues._id}</small>
          </span>
        </div>
        <div className="panel-body">
          <form onSubmit={handleSubmit(onSave)}>

            <Field name="title" type="text" component={renderField} label="Title" />

            <Field name="status" component={renderSelect} label="Status">
              {this.props.statusList.map(s => <option key={s._id} value={s.label}>{s.label}</option>)}
            </Field>

            <Field name="description" component={renderTextArea} label="Description" />

            <button action="submit" disabled={pristine || invalid} className="btn btn-primary">Submit</button>
            <button type="button" disabled={pristine} onClick={reset} className="btn btn-default">Undo</button>
          </form>
        </div>
        <div className="panel-footer" />
      </div>
    );
  }
}
