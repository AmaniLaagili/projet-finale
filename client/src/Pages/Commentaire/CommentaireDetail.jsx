import React from "react";
import CommentaireCard from "./CommentaireCard";

function CommentaireDetail() {
    const AjouterCommentaire = useSelector(
        (state) => state.commentaireReducer.commentaires
    );
    return (
        <div>
            {AjouterCommentaire &&
                AjouterCommentaire.map((commentaire, i) => (
                    <CommentaireCard
                        key={element._id}
                        commentaire={commentaire}
                    />
                ))}
        </div>
    );
}

export default CommentaireDetail;
