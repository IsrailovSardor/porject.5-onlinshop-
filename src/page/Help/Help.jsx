import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Help.css";
// COMPONENTS
import Scroll from "../../components/Scroll/Scroll";
// MUI
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// REDUX
import { getProdcutHelp } from "../../redux/productact";
import { useDispatch, useSelector } from "react-redux";

const Help = () => {
  // help
  const dispatch = useDispatch();
  const help = useSelector((state) => {
    const { productsReducer } = state;
    return productsReducer.help;
  });
  useEffect(() => {
    dispatch(getProdcutHelp());
  }, []);

  return (
    <div className="help_container">
      <Scroll />
      <Breadcrumbs aria-label="breadcrumb" className="breadcrumb_block">
        <Link to="/" className="breadcrumb_link">
          Главная
        </Link>
        <p className="breadcrumb_links">Помощь</p>
      </Breadcrumbs>
      <div className="help_block">
        <div className="help_block_img">
          <img src={help.img} alt="" />
        </div>
        <div className="help_block_info">
          <p className="help_block_title">Помощь</p>
          <div>
            {help.questim
              ? help.questim.map((help) => (
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{help.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{help.text}</Typography>
                    </AccordionDetails>
                  </Accordion>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
