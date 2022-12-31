import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const Faq = () => {
  return (
    <div>
      <div className=" text-center my-12">
        <h1 className="lg:text-5xl text-3xl font-bold text-center pt-12 text-secondary">
          F.A.Q
        </h1>
        <div className="border-b-2 border-primary lg:w-32 mx-auto mt-4 w-12"></div>
        <p className="pb-6 text-success font-bold text-xl my-6 p-3">
          Sed hendrerit, diam et pellentesque aliquam, lectus ipsum maximus
          quam, vitae auctor
        </p>
      </div>
      <div className="lg:flex justify-center items-center mb-12 mx-2">
        <div>
          <Accordion className="lg:w-80 mt-2">
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="bg-accent hover:opacity-75 p-4">
                  What harsh truths do you prefer to ignore?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-secondary">
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="lg:w-80 mt-2">
              <AccordionItemHeading>
                <AccordionItemButton className="bg-accent hover:opacity-75 p-4">
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-secondary">
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="">
          <Accordion className="lg:w-80 mt-2">
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="bg-accent hover:opacity-75 p-4">
                  What harsh truths do you prefer to ignore?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-secondary">
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="lg:w-80 mt-2">
              <AccordionItemHeading>
                <AccordionItemButton className="bg-accent hover:opacity-75 p-4">
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-secondary">
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
