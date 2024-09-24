import React, { useState } from "react";

export const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="FAQ-Accordion">
      <h1 className="my-5">FREQUENTLY ASKED QUESTION </h1>
      <div class="accordion  accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <h2>Can I hire someone to put furniture together?</h2>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <p>
                {" "}
                Absolutely! Smart Automator can connect you with handy Taskers
                who are experienced in all kinds of furniture assembly,
                including beds, dressers, tables, IKEA furniture, and outdoor
                patio furniture. Taskers can bring their own tools to assemble
                your furniture and move it just where you need it.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <h2> How much does it cost to assemble furniture?</h2>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <p>
                {" "}
                Taskers offer furniture assembly services at rates from $18-28
                per hour. If you need any old furniture removed, ask your Tasker
                if they can bring their vehicle to help you!
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <h2> How long does it take to assemble furniture?</h2>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <p>
                Furniture assembly typically takes between 1-4 hours depending
                on the size and complexity of the furniture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
