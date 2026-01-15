/* eslint-disable react/prop-types */
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";

export const NewWeds = ({ setDate, eligibleForNewWeds, checkDiscounts }) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState("center");
  const show = (position) => {
    setPosition(position);
    setVisible(true);
  };

  function save() {
    checkDiscounts();
    setVisible(false);
  }

  const footerContent = (
    <div>
      <Button
        label="Mégse"
        icon="pi pi-times"
        onClick={() => setVisible(false)}
        className="p-button-text"
      />
      <Button
        label="Mentés"
        icon="pi pi-check"
        onClick={() => save()}
        autoFocus
      />
    </div>
  );

  return (
    <>
      <div className="new-weds">
        <div>
          <div className="flex flex-wrap justify-content-center gap-2 mb-2">
            <Button
              label="Dátum beállítása"
              onClick={() => show("top")}
              unstyled={true}
              className="set-date-button"
            />
            <Dialog
              header="Dátum beállítása"
              visible={visible}
              position={position}
              style={{ width: "50vw" }}
              onHide={() => setVisible(false)}
              footer={footerContent}
              draggable={false}
              resizable={false}
            >
              A kedvezmény először a házasságkötést követkő hónapra vehető
              igénybe és a házassági életközösség alatt legfejlebb 24 hónapon
              keresztül jár.
              <br />
              <br />
              <label htmlFor="date">
                <b>Add meg a házasságkötés dátumát:</b>
              </label>
              <form action="">
                <input
                  type="date"
                  name="date"
                  id="date"
                  onChange={(e) => setDate(new Date(e.target.value))}
                />
              </form>
              <span className="smokey">Például: 25/10/2000</span>
            </Dialog>
          </div>
        </div>

        {eligibleForNewWeds ? (
          <div className="new-weds-valid">Jogosult</div>
        ) : (
          <div className="new-weds-not-valid">Nem jogosult</div>
        )}
      </div>
    </>
  );
};
