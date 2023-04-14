import React from "react";
import defaultBook from "../img/default-book.jpg";

class BookCard extends React.Component {
    render() {
        let thumbnail = defaultBook;
        let description = this.props.description;

        if (this.props.image) {
            thumbnail = this.props.image.thumbnail;
        }

        if(!this.props.description) {
            description = "Description non disponible."
        } else if (this.props.description.length > 100) {
            description = this.props.description.substring(0, 100) + "..."
        } 

        return (
            <div className="book-card">
                <img src={thumbnail} alt={this.props.title}/>
                <div className="book-details">
                    <a href={this.props.url} target="_blank" rel="noreferrer">
                        <h2>{this.props.title}</h2>
                    </a>
                    <p className="author">{this.props.author}</p>
                    <p className="date">{this.props.date}</p>
                    <p className="description">{description}</p>
                </div>
            </div>
        );
    }
}

export default BookCard;