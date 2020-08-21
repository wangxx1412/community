import React, { useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

interface PriceRangeProps {
  getPriceRange: (min: number | "", max: number | "") => void;
}

export const PriceRange = (props: PriceRangeProps): JSX.Element => {
  const [min, setMin] = useState<number | "">("");
  const [max, setMax] = useState<number | "">("");

  const handleMinChange = (e: any) => {
    setMin(e.target.value);
  };

  const handleMaxChange = (e: any) => {
    setMax(e.target.value);
  };

  return (
    <Segment inverted>
      <Form inverted>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Min price"
            placeholder="Min price"
            value={min}
            onChange={handleMinChange}
          />
          <Form.Input
            fluid
            label="Max price"
            placeholder="Max price"
            value={max}
            onChange={handleMaxChange}
          />
        </Form.Group>
        <Button type="submit" onClick={() => props.getPriceRange(min, max)}>
          Confirm
        </Button>
        <Button
          onClick={() => {
            setMin("");
            setMax("");
          }}
        >
          Reset
        </Button>
      </Form>
    </Segment>
  );
};
