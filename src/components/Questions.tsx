import { Field } from "formik"

type questionProps = {
    questionName: string,
    questionText: string
}

export const Question = (props: questionProps) => {
    return (
        <div>
        <label className="block text-left py-1" htmlFor={props.questionName}>{props.questionText}</label>
        <Field className="w-full py-2" name={props.questionName} as="select">
            <option value="1">1 (Strongly Disagree)</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5 (Strongly Agree)</option>
        </Field>
    </div>
    )
}