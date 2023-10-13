import { Formik, Field, Form } from "formik"

export const Survey = () => {
    return (
        <div className="bg-blue-100 p-10">
            <h1>Survey</h1>
            <Formik
                initialValues={{ q1: 0, q2: 0 }}
                onSubmit={async (values) => {
                    console.log('The Results are', JSON.stringify(values, null, 2))
                }}
            >
                <Form>
                    <div className="flex">
                    <label htmlFor="q1">This is a question</label>
                    <Field className="block" name="q1" as="select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </Field>
                    </div>
                    <Field className="block" name="q2" type="text"/>
                    <Field className="block" name="q3" type="text"/>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}