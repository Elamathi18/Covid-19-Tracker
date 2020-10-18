import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases, total, active, isRed, ...props }) {
  console.log(title, active);
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox-selected"} ${
        isRed && "infoBox-red"
      }`}
    >
      <CardContent>
          {/*Title i.e Corornavire cases */}
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        {/*+120k Number of cases */}
        <h2 className={`infoBox_cases ${!isRed && "infoBox_cases-green"}`}>
          {cases}
          {/*1.2 Mtotal */}
        </h2>

        <Typography className="infoBox_total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;