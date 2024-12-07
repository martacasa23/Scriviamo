import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Importa Link per la navigazione tra le pagine

function PublishedStories() {
  const [stories, setStories] = useState([]);

  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'https://145.223.80.233';

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/stories/published/`);
        if (response.ok) {
          const data = await response.json();
          setStories(data);
        } else {
          console.error('Errore nel recupero delle storie.');
        }
      } catch (error) {
        console.error('Errore:', error);
      }
    };

    fetchStories();
  }, [backendUrl]); // Aggiungi backendUrl qui per risolvere l'errore

  return (
    <div className="story-container bg-warning-subtle">
      <h1 className="text-center">Storie Pubblicate</h1>
      <div className="row justify-content-center">
        {stories.length > 0 ? (
          stories.map((story) => (
            <div className="col-md-6 col-lg-4 mb-4 d-flex justify-content-center" key={story.id}>
              <div className="card border-dark text-center" style={{ width: '18rem' }}>
                <div className="card-body">
                  <h5 className="card-title">{story.title}</h5>
                  <p className="card-text">Autore: {story.name}</p>
                  <p className="card-text">{story.content.substring(0, 100)}...</p>
                  <Link to={`/story/${story.id}`} className="btn btn-outline-dark">
                    Leggi la storia
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Non ci sono storie pubblicate al momento.</p>
        )}
      </div>
    </div>
  );
}

export default PublishedStories;
