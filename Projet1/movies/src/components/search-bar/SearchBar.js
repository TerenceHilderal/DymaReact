import React, { Component } from "react";

import { Formik } from "formik";

export default class SearchBar extends Component {
	submit = (values, actions) => {
		console.log(values);
	};
	render() {
		return (
			<Formik onSubmit={this.submit} initialValues={{ query: "" }}>
				{({ handleSubmit, handleChange, handleBlur, isSubmitting }) => (
					<form className="d-flex p-2 m-2 flex-row " onSubmit={handleSubmit}>
						<input
							name="query"
							className="form-control mr-2 flex-fill"
							placeholder="search"
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<button
							className="btn btn-success btn-small"
							type="submit"
							disabled={isSubmitting}
						>
							Submit
						</button>
					</form>
				)}
			</Formik>
		);
	}
}
