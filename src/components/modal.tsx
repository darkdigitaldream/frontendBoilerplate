import * as React from "react";
import { connect } from "react-redux";
import * as path from "path";
import { Grid, Row, Col } from "react-flexbox-grid";

import { IAppState } from "../stores/store";
import Logger from "../utils/logger";
import NavBar from "../components/navbar";
import { Link } from "react-router-dom";

const logger = Logger(path.basename(__filename));

interface IProps {
  isOpen: boolean;
  children?: any;
}

const Component: React.SFC<IProps> = (props: IProps) => {
  return (props.isOpen ?
    <div className="modalGreyout">
      <div className="modalContent">
        {props.children}
      </div>
    </div>
    : null
  );
};

export default Component;
