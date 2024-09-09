import { useState } from "react";
import SuccessMessage from "./SuccessMessage";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    termsAccepted: false,
  });

  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = "This field is required";
    if (!formData.lastName) errors.lastName = "This field is required";
    if (!formData.email) errors.email = "Email address is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Please enter a valid email adddress";
    if (!formData.queryType) errors.queryType = "Please select a query type";
    if (!formData.message) errors.message = "This field is required";
    if (!formData.termsAccepted)
      errors.termsAccepted =
        "To submit this form, please consent to being contacted";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setSuccessMessage(
        "Thanks for completing the form. We'll be in touch soon!"
      );
      setFormErrors({});
      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        queryType: "",
        message: "",
        termsAccepted: false,
      });
    } else {
      setFormErrors(errors);
      setSuccessMessage("");
    }
  };

  return (
    <>
      <SuccessMessage message={successMessage} />
      <div className="px-6 py-8 lg:px-10 bg-white rounded-lg karla-400 max-w-[50rem] mx-auto">
        <h2 className="text-3xl font-bold text-left text-Grey-900-Darker mb-6">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="mb-4 w-full ">
              <label className="block text-gray-700">
                First Name <span className="text-Green-600-Medium">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-2 focus:outline-Green-600-Medium  cursor-pointer"
              />
              {formErrors.firstName && (
                <p className="text-red-500 text-sm">{formErrors.firstName}</p>
              )}
            </div>
            {/* Last Name */}
            <div className="mb-4 w-full ">
              <label className="block text-gray-700">
                Last Name <span className="text-Green-600-Medium">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border rounded mt-2 focus:outline-Green-600-Medium cursor-pointer"
              />
              {formErrors.lastName && (
                <p className="text-red-500 text-sm">{formErrors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email Address */}
          <div className="mb-4">
            <label className="block text-gray-700">
              Email Address <span className="text-Green-600-Medium">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-2 focus:outline-Green-600-Medium cursor-pointer"
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm">{formErrors.email}</p>
            )}
          </div>

          {/* Query Type (Radio Buttons) */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-4">
              Query Type <span className="text-Green-600-Medium">*</span>
            </label>
            <div className="flex flex-col md:flex-row gap-y-4 gap-x-6">
              <div
                className={`flex items-center p-3 border gap-2 w-full ${
                  formData.queryType === "general"
                    ? "border-Green-600-Medium"
                    : "border-Grey-500-Medium"
                } rounded-md ${
                  formData.queryType === "general"
                    ? "bg-Green-600-Medium/10"
                    : "transparent"
                }`}
              >
                <div className="grid place-items-center">
                  <input
                    type="radio"
                    name="queryType"
                    value="general"
                    checked={formData.queryType === "general"}
                    onChange={handleChange}
                    className={`cursor-pointer col-start-1 row-start-1 h-4 w-4 appearance-none rounded-full border-2 ${
                      formData.queryType === "general"
                        ? "border-Green-600-Medium"
                        : "transparent border-Grey-500-Medium"
                    }`}
                  />
                  <div
                    className={`col-start-1 row-start-1 items-center justify-center w-2 h-2 rounded-full ${
                      formData.queryType === "general"
                        ? "bg-Green-600-Medium"
                        : "transparent"
                    } `}
                  />
                </div>
                General Enquiry
              </div>
              <div
                className={`flex items-center p-3 border gap-2 w-full ${
                  formData.type === "support"
                    ? "border-Green-600-Medium"
                    : "border-Grey-500-Medium"
                } rounded-md ${
                  formData.queryType === "support"
                    ? "bg-Green-600-Medium/10"
                    : "transparent"
                }`}
              >
                <div className="grid place-items-center">
                  <input
                    type="radio"
                    name="queryType"
                    value="support"
                    checked={formData.queryType === "support"}
                    onChange={handleChange}
                    className={`cursor-pointer col-start-1 row-start-1 h-4 w-4 appearance-none rounded-full border-2 ${
                      formData.queryType === "support"
                        ? "border-Green-600-Medium"
                        : "transparent border-Grey-500-Medium"
                    }`}
                  />
                  <div
                    className={`col-start-1 row-start-1 items-center justify-center w-2 h-2 rounded-full ${
                      formData.queryType === "support"
                        ? "bg-Green-600-Medium"
                        : "transparent"
                    } `}
                  />
                </div>
                Support Request
              </div>
            </div>
            {formErrors.queryType && (
              <p className="text-red-500 text-sm">{formErrors.queryType}</p>
            )}
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="block text-gray-700">
              Message <span className="text-Green-600-Medium">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-2 cursor-pointer focus:outline-Green-600-Medium"
              rows="4"
            ></textarea>
            {formErrors.message && (
              <p className="text-red-500 text-sm">{formErrors.message}</p>
            )}
          </div>

          {/* Checkbox */}
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mr-2 accent-Green-600-Medium"
              />
              I consent to being contacted by the team{" "}
              <span className="text-Green-600-Medium">*</span>
            </label>
            {formErrors.termsAccepted && (
              <p className="text-red-500 text-sm">{formErrors.termsAccepted}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-Green-600-Medium text-white py-2 rounded-md hover:bg"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
