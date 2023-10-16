import { Formik, Form } from "formik"
import { Question } from "./Questions"
import { questionList } from "./questionList.json"

type questionProps = {
    name: string,
    text: string
}

export const Survey = () => {
    return (
        <div className="bg-blue-100 m-40 p-10">
            <h1 className="text-center">Survey</h1>
            <Formik
                initialValues={{ q1: "1", q2: "1", q3: "1", q4: "1", q5: "1", q6: "1", q7: "1", q8: "1", q9: "1", q10: "1" }}
                onSubmit={async (values) => {
                    console.log('The Results are', JSON.stringify(values, null, 2))
                }}
            >
                <Form>
                    {questionList.map((question: questionProps, index) => {
                        return <Question key={index} questionName={question.name} questionText={question.text} />
                    })}
                    <button className="bg-blue-200" type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}