import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,
      handleLike: () => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      },
      handleDislike: () => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      }
    };
  }
  render() {
    return (
      <>
        <h1>Text Content Rating</h1>
        <div className='content-rating'>
          <p>
          React is a popular JavaScript library for building user interfaces, especially for single-page applications (SPAs). It allows you to build components that can manage their own state and be composed into complex UIs.

A typical React app involves:

Components: Reusable building blocks that render UI.

JSX: A syntax extension that looks like HTML but allows you to embed JavaScript code.

State & Props: State represents data that can change over time, while props are passed from parent to child components to share data.

React Router: For navigation and handling different views in a single-page app.

Hooks: Functions like useState, useEffect, etc., that allow you to use state and other React features in functional components.
                      
            </p>
          <div className='rating-buttons'>
            <button className="like-button" onClick={this.state.handleLike}>
              Like ({this.state.likes})
            </button>
            <button className="dislike-button" onClick={this.state.handleDislike}>
              Dislike ({this.state.dislikes})
            </button>
          </div>
          <p>Total Ratings: {this.state.totalRatings}</p>
        </div>
      </>
    );
  }
}
export default ContentRating;
