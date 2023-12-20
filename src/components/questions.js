


function QuestionsComponent(props) {

    const handleClick = (q, opt) => {
        console.log("Question : " + q.id);
        console.log("Réponse : " + opt)
    };

    return (

        <div className="container questions">
            <h2>Questions</h2>

            {props.questions.map(q =>

                <div key={q.id} className="question-block">
                    <div className="question">

                        <h3 id="question_title">{q.id} : {q.question}</h3><br />


                        {q.options.map((opt, index) =>
                            <div key={q.id + "_" + opt}>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name={q.id} id={opt} onClick={() => handleClick(q, opt)} />
                                    <label className="form-check-label" htmlFor={opt}>
                                        {opt}
                                    </label>
                                </div>
                            </div>
                        )}
                    </div>
                </div>)}
        </div>
    );
}
export default QuestionsComponent;