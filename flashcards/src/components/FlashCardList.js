import Flashcard from "./Flashcard";

const FlashCardList = ({flashcards}) => {
    return (
        <div className="card-grid"> 
            {flashcards.map( flashcard => {
                return <Flashcard flashcard = {flashcard} kry = {flashcard.id} />
            })}
        </div>
    )
}

export default FlashCardList;