import { Formik, Form } from "formik"
import { Question } from "./Questions"
import { questionList } from "./questionList.json"
import { calculateCharacter } from "../data/characterCalculator"
import { useState } from "react"

type questionProps = {
    name: string,
    text: string
}

export const Survey = () => {
    const [loading, setLoading] = useState(false)

    // set values for rendering
    const [name, setName] = useState("name")
    const [bioData, setBioData] = useState("bio")
    const [img, setImg] = useState("src/assets/images/jeanne.jpeg")
    const renderAnswer = (answers) => {
        const selectedCharacter = calculateCharacter(answers)
        console.log(selectedCharacter)
        setName(selectedCharacter.name)
        setBioData(selectedCharacter.bio)
        setImg(selectedCharacter.photo)
        setLoading(true)
        
    }
    const resetSurvey = () => {
        setLoading(false)
    }
    return (
        <div className="bg-blue-100 m-40 p-10">
            <h1 className="text-center">Survey</h1>
        
           {loading ?
            <div>
                <img src={img} />
                <h1>{name}</h1>
                <p>{bioData}</p>
                <button className="bg-blue-200" onClick={resetSurvey}>Restart</button>
            </div>
            : <Formik
                initialValues={{ q1: "1", q2: "1", q3: "1", q4: "1", q5: "1", q6: "1", q7: "1", q8: "1", q9: "1", q10: "1" }}
                onSubmit={async (values) => {
                    renderAnswer(values)
                }}
            >
                <Form>
                    {questionList.map((question: questionProps, index) => {
                        return <Question key={index} questionName={question.name} questionText={question.text} />
                    })}
                    <button className="bg-blue-200 mx-auto" type="submit">Submit</button>
                </Form>
            </Formik>}
        </div>
    )
}