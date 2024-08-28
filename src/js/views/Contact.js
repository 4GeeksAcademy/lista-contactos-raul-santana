import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <div className="container card mb-3 p-3">
        <div className="text-center">
          <h5 className="card-title">Contacto</h5>
          <div className="mb-3">
            <Link to="/editcontact">
              <button className="btn btn-info mx-2">Editar</button>
            </Link>
            <Link to="/">
              <button className="btn btn-secondary mx-2">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
}

export default Contact;
