import React from 'react'
import { Dropdown} from "react-bootstrap";
const Userlistdropdown = () => {
  return (
    <div>
        <Dropdown>
                    <Dropdown.Toggle
                      href="#!"
                      className="option-dots" variant="default"

                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fe fe-more-horizontal"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-end" style={{ marginTop: "0px" }}>
                      <Dropdown.Item href="#!">
                        Aujourd'hui
                      </Dropdown.Item>
                      <Dropdown.Item href="#!">
                      derniere semaine 
                      </Dropdown.Item>
                      <Dropdown.Item href="#!">
                        dernier mois
                      </Dropdown.Item>
                      <Dropdown.Item href="#!">
                        Derniere annee
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
    </div>
  )
}

export default Userlistdropdown