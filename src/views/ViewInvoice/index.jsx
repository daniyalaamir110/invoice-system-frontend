import _ from "lodash";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import invoices from "../Invoices/invoices.json";

const DetailItem = ({ label, value }) => {
  return (
    <div className="flex flex-row my-4">
      <div className="w-full block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </div>
      <div className="w-full block mb-2 text-sm text-gray-900 dark:text-white">
        {value}
      </div>
    </div>
  );
};

const OrderItem = ({ tag, description, price }) => {
  return (
    <div className="flex flex-row my-4">
      <div className="w-full block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {tag}
      </div>
      <div className="w-full block mb-2 text-sm text-gray-900 dark:text-white">
        {description}
      </div>
      <div className="block mb-2 text-sm text-gray-900 dark:text-white">
        ${price}
      </div>
    </div>
  );
};

const ViewInvoice = () => {
  const navigate = useNavigate();

  const params = useParams();

  const id = +params.id;

  const invoice = _.find(invoices, { id });

  const [loading, setLoading] = useState(false);

  return (
    <div className="pt-5 w-[50%]">
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Client Details
      </h2>
      <DetailItem label="Name" value="John Doe" />
      <DetailItem label="Company" value="Quantum Paradigm (Pvt) Ltd." />
      <DetailItem label="Phone" value="+92 319 1296 169" />
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Order Details
      </h2>
      <div className="flex flex-row my-4">
        <div className="w-full block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Tag
        </div>
        <div className="w-full block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Description
        </div>
        <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Price
        </div>
      </div>
      <OrderItem
        tag="Nut - Pistachio, Shelled"
        description="Dummy Description"
        price="508"
      />
      <OrderItem
        tag="Nut - Pistachio, Shelled"
        description="Dummy Description"
        price="508"
      />
      <OrderItem
        tag="Nut - Pistachio, Shelled"
        description="Dummy Description"
        price="508"
      />
      <OrderItem
        tag="Nut - Pistachio, Shelled"
        description="Dummy Description"
        price="508"
      />
    </div>
  );
};

export default ViewInvoice;
