import React from 'react';
// import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { validate, warn } from './taskValidation';

// Form Fields
const renderField = (field, element) => {
  const hasIssue = (field.meta.touched && ((field.meta.error && 'has-error') || (field.meta.warning && 'has-warning')));
  return (
    <div className={`form-group ${hasIssue}`}>
      <label htmlFor={field.label}>{field.label}</label>
      {element}
      {field.meta.touched && (
        (field.meta.error &&
          <span className="help-block"><span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true" />&nbsp;{field.meta.error}</span>
        ) || (field.meta.warning &&
          <span className="help-block"><span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true" />&nbsp;{field.meta.warning}</span>)
      )}
    </div>);
};

const renderInput = field => (renderField(field, <input {...field.input} className="form-control" />));

const renderTextArea = field => (renderField(field, <textarea {...field.input} className="form-control" />));

const renderSelect = field => (renderField(field, <select {...field.input} className="form-control">{field.children}</select>));

@reduxForm({ form: 'TaskEditor', validate, warn, enableReinitialize: true })
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
    submitting: React.PropTypes.bool.isRequired,
  }

  render() {
    const { pristine, reset, invalid, submitting, handleSubmit, onSave } = this.props;
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

            <Field name="title" type="text" component={renderInput} label="Title" />

            <Field name="status" component={renderSelect} label="Status">
              {this.props.statusList.map(s => <option key={s._id} value={s.label}>{s.label}</option>)}
            </Field>

            <Field name="description" component={renderTextArea} label="Description" />

            <button action="submit" disabled={pristine || invalid} className="btn btn-primary">Submit</button>
            <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-default">Undo</button>
          </form>
        </div>
        <div className="panel-footer" />
      </div>
    );
  }
}
