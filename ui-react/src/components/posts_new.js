import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { createPost } from '../actions'

class PostsNew extends Component {
    renderField(field) {
        const {meta: {touched, error}} = field
        const className = `form-group ${touched && error ? 'has-danger' : ''}`

        return (
            <div className="{className}">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                // onChange={field.input.onChange}
                // onFocus={field.input.onFocus}
                // onBlur={field.input.onBlur}
                {...field.input} // this fancy JSX is equivalent to lines above
                />
                <div className="text-help">
                {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
            // error field is automatically added by redux-form
        )
    }
    
    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/')
        })
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title of Post"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        )
    }
}

function validate(values) {
    // values = {title: 'aaaa', categories: 'bbbbb', content: 'ssss'}
    const errors = {}

    if (!values.title || values.title.length < 3) {
        errors.title = "Enter a title that is at least 3 characters!"
    }
    if (!values.categories) {
        errors.categories = "Enter some categories!"
    }
    if (!values.content) {
        errors.content = "Enter some content please!"
    }

    // If errors is empty, the form is fine to submit
    // If errors has *any* properties, redux form assumes form is invalid
    return errors
}

export default reduxForm({
    validate, // again JSX fancy shortcut (field name and value is identical)
    form: 'PostsNewForm' //needs to be unique
})(
    connect(null, { createPost })(PostsNew)
)
