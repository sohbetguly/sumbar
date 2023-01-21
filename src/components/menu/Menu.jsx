import { useState } from "react";
import { ButtonGroup, Dropdown } from "react-bootstrap";
import { BsFilterLeft } from "react-icons/bs";
import { MdMonitor } from "react-icons/md";
import menuItems from "../../utils/menuItems";
import styles from "./Menu.module.css";

function Menu() {
  const [isHidden, setIsHidden] = useState("false");
  const setActiveMenu = (id) => {
    setIsHidden(id);
    // setMenuItems(clone);
  };

  return (
    <div className="d-md-block d-none shadow">
      <div className=" list-group shadow-sm mb-1">
        <div className="list-group-item border-0 p-0">
          <a
            className="btn btn-danger fw-bold w-100 p-1"
            style={{
              fontSize: "0.8rem",
            }}
            href="#"
          >
            <div className="d-flex align-items-center text-left">
              <BsFilterLeft
                style={{ minWidth: "2rem", fontSize: "2.5rem" }}
                className="text-center px-2 p-0"
              />
              <div className="py-1 text-truncate">ÄHLI HARYTLAR</div>
            </div>
          </a>
        </div>
      </div>
      <div className="list-group">
        <div className="list-group-item p-0">
          {menuItems.map(({ title, id, links, link }) => {
            return (
              <Dropdown
                key={title}
                className="w-100 d-flex justify-content-center align-items-center "
                as={ButtonGroup}
                drop="end"
                // onClick={(event) => setActiveMenu(event.target.id)}
                onMouseEnter={(event) => setActiveMenu(event.target.id)}
                onMouseLeave={() => setIsHidden("false")}
              >
                <Dropdown.Toggle
                  style={{ minHeight: "3rem", minWidth: "10rem" }}
                  className={`${styles["dropdown-in-right"]} ${
                    isHidden !== id
                      ? styles["opacity-low"]
                      : styles["opacity-high"]
                  } d-flex align-items-center py-1 p-0 pe-1 w-100 btn btn-light border-bottom text-start text-wrap bg-white
                  ${link && styles.removeDrop} `}
                  id={id}
                >
                  <MdMonitor
                    style={{
                      minWidth: "2rem",
                      fontSize: "1.5rem",
                    }}
                    className="px-1 mx-1 p-0 fw-bold"
                  />
                  <p
                    style={{ fontSize: "0.8rem", fontWeight: "500" }}
                    className="p-0 m-0 pe-1"
                  >
                    {title}
                  </p>
                </Dropdown.Toggle>
                {!link ? (
                  <Dropdown.Menu show={isHidden == id} className="super-colors">
                    {links.map(({ title, link }, index) => (
                      <Dropdown.Item
                        key={title}
                        href={link}
                        eventKey={index}
                        className="py-2"
                      >
                        <MdMonitor
                          style={{
                            minWidth: "2rem",
                            fontSize: "1.5rem",
                          }}
                          className="px-1 mx-1 p-0 fw-bold"
                        />
                        {title}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                ) : (
                  ""
                )}
              </Dropdown>
            );
          })}
        </div>
      </div>
      <div className="menu-items"></div>
    </div>
  );
}

export default Menu;
