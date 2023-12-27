import { InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useForm, Controller } from "react-hook-form";
import parsePhoneNumber from "libphonenumber-js";
import { useState } from "react";
import {
  contactNumberRules,
  dateRules,
  emailRules,
  fullNameRules,
  getMonths,
  getPreviousYearsList,
  handlerCreateUser,
  passwordRules,
  padZeroToNumber,
} from "../helpers/createUserFormHelper";
import {
  CancelButton,
  MobileOnlyDiv,
  SubmitButton,
} from "./StyledComponents/shared";
import {
  CreateUserTextField,
  CusomTelField,
  FormLabel,
  FormWrapper,
  PlaceholderSpan,
  ButtonWrapper,
  ErrorSpan,
} from "./StyledComponents/createAccountStyles";
import Toast from "./toast";

const RenderErrorMessage = ({ errorField }: any) => {
  return (
    <ErrorSpan>
      {errorField && (
        <span>
          {typeof errorField.message === "string" ? errorField.message : ""}
        </span>
      )}
    </ErrorSpan>
  );
};

export const CreateUserForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    mode: "onSubmit", // first validation on submit
    reValidateMode: "onChange", // if error in form after first submit, next validation is on field change
  });

  // const [contactNumber, setContactNumber] = useState('');
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <>
      <FormWrapper
        onSubmit={handleSubmit((data: any, e: any) => {
          e.stopPropagation();
          setLoading(true);
          handlerCreateUser({
            full_name: data.fullName.trim(),
            contact_number: parsePhoneNumber(data.contactNumber)?.number || "",
            email: data.email,
            date_of_birth: `${data.day}/${data.month}/${data.year}`,
            password: data.password,
          })
            .then(() => {
              setSuccess(true);
            })
            .catch(() => {
              setError(true);
            })
            .finally(() => {
              setLoading(false);
            });
        })}
      >
        {success && (
          <Toast
            severity="success"
            message="User account successfully created."
            reset={() => {
              setError(false);
              setSuccess(false);
            }}
          />
        )}
        {error && (
          <Toast
            severity="error"
            message="There was an error creating the account."
            reset={() => {
              setError(false);
              setSuccess(false);
            }}
          />
        )}
        <MobileOnlyDiv>
          <div
            style={{
              width: "100%",
              height: "1px",
              border: "0.1px solid #D8E0E9",
            }}
          />
        </MobileOnlyDiv>

        {/* Full Name Field  */}
        <FormLabel>Full Name</FormLabel>
        <Controller
          control={control}
          name="fullName"
          rules={fullNameRules}
          render={({ field: { onChange, value } }) => {
            return (
              <CreateUserTextField
                error={!!errors.fullName}
                value={value || ""}
                onChange={onChange}
                label={
                  <PlaceholderSpan>
                    Full Name<sup style={{ color: "red" }}>*</sup>
                  </PlaceholderSpan>
                }
              />
            );
          }}
        />
        <RenderErrorMessage errorField={errors.fullName} />

        {/* Contact number field */}
        <FormLabel>Contact Number</FormLabel>
        <Controller
          control={control}
          name="contactNumber"
          rules={contactNumberRules}
          render={({ field: { onChange, value } }) => {
            return (
              <CusomTelField
                defaultCountry="CA"
                onlyCountries={["CA"]}
                value={value || ""}
                onChange={(e: any) => {
                  // handleChange(e);
                  onChange(e);
                }}
                label={
                  <PlaceholderSpan>
                    Contact number<sup style={{ color: "red" }}>*</sup>
                  </PlaceholderSpan>
                }
              />
            );
          }}
        />
        <RenderErrorMessage errorField={errors.contactNumber} />

        {/* Birthdate Field */}
        <FormLabel>Birthdate</FormLabel>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Controller
            control={control}
            name="day"
            rules={dateRules(`${year}/${month}/${day}`)}
            render={({ field: { onChange, value } }) => {
              return (
                <FormControl sx={{ minWidth: 80 }} className="birthDateWidth">
                  <InputLabel>
                    {
                      <PlaceholderSpan>
                        Day<sup style={{ color: "red" }}>*</sup>
                      </PlaceholderSpan>
                    }
                  </InputLabel>
                  <Select
                    label="Day"
                    value={value || ""}
                    onChange={(e: any) => {
                      setDay(e.target.value);
                      onChange(e);
                    }}
                  >
                    {Array.from(Array(31).keys()).map(
                      (Day: any, index: number) => {
                        return (
                          <MenuItem
                            value={padZeroToNumber(index + 1)}
                            key={index + 1}
                          >
                            {padZeroToNumber(index + 1)}
                          </MenuItem>
                        );
                      },
                    )}
                  </Select>
                </FormControl>
              );
            }}
          />

          <Controller
            control={control}
            name="month"
            rules={dateRules(`${year}/${month}/${day}`)}
            render={({ field: { onChange, value } }) => {
              return (
                <FormControl sx={{ minWidth: 100 }} className="birthDateWidth">
                  <InputLabel>
                    {
                      <PlaceholderSpan>
                        Month<sup style={{ color: "red" }}>*</sup>
                      </PlaceholderSpan>
                    }
                  </InputLabel>
                  <Select
                    label="Month"
                    value={value}
                    onChange={(e: any) => {
                      setMonth(e.target.value);
                      onChange(e);
                    }}
                  >
                    {getMonths().map(
                      (month: { label: string; value: number }) => (
                        <MenuItem
                          key={month.value}
                          value={padZeroToNumber(month.value)}
                        >
                          {month.label}
                        </MenuItem>
                      ),
                    )}
                  </Select>
                </FormControl>
              );
            }}
          />

          <Controller
            control={control}
            name="year"
            rules={dateRules(`${year}/${month}/${day}`)}
            render={({ field: { onChange, value } }) => {
              return (
                <FormControl sx={{ minWidth: 100 }} className="birthDateWidth">
                  <InputLabel>
                    {
                      <PlaceholderSpan>
                        Year<sup style={{ color: "red" }}>*</sup>
                      </PlaceholderSpan>
                    }
                  </InputLabel>
                  <Select
                    label="Year"
                    value={value || ""}
                    onChange={(e: any) => {
                      setYear(e.target.value);
                      onChange(e);
                    }}
                  >
                    {getPreviousYearsList(150).map((year: any) => (
                      <MenuItem key={year.value} value={year.value}>
                        {year.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              );
            }}
          />
        </div>
        {/* Since all selectors are validated with same rule, thus to show date error are enough. */}
        <RenderErrorMessage errorField={errors.day} />

        {/* Email Address Field */}
        <FormLabel>Email Adress</FormLabel>
        <Controller
          control={control}
          name="email"
          rules={emailRules}
          render={({ field: { onChange, value, onBlur, ref } }) => {
            return (
              <CreateUserTextField
                // type="email"
                onChange={onChange}
                value={value || ""}
                label={
                  <PlaceholderSpan>
                    Email Address<sup style={{ color: "red" }}>*</sup>
                  </PlaceholderSpan>
                }
              />
            );
          }}
        />
        <RenderErrorMessage errorField={errors.email} />

        {/* password Field */}
        <FormLabel>Password</FormLabel>
        <Controller
          control={control}
          name="password"
          rules={passwordRules}
          render={({ field: { onChange, value, onBlur, ref } }) => {
            return (
              <CreateUserTextField
                value={value || ""}
                type="password"
                onChange={onChange}
                label={
                  <PlaceholderSpan>
                    Password<sup style={{ color: "red" }}>*</sup>
                  </PlaceholderSpan>
                }
              />
            );
          }}
        />
        <RenderErrorMessage errorField={errors.password} />

        {/* confirm password field */}
        <FormLabel>Confirm Password</FormLabel>
        <Controller
          control={control}
          name="confirmPassword"
          rules={{
            validate: (val: string) => {
              if (watch("password") !== val) {
                return "Your passwords do no match";
              }
            },
          }}
          render={({ field: { onChange, value, onBlur, ref } }) => {
            return (
              <CreateUserTextField
                value={value || ""}
                type="password"
                onChange={onChange}
                label={
                  <PlaceholderSpan>
                    Confirm Password<sup style={{ color: "red" }}>*</sup>
                  </PlaceholderSpan>
                }
              />
            );
          }}
        />
        <RenderErrorMessage errorField={errors.confirmPassword} />

        <ButtonWrapper>
          <CancelButton
            disabled={loading}
            className={loading ? "disabled" : ""}
            onClick={() => {
              if (loading) return;
              reset({});
            }}
          >
            Cancel
          </CancelButton>
          <SubmitButton
            name="submit"
            disabled={loading}
            className={loading ? "disabled" : ""}
            type={loading ? "button" : "submit"}
          >
            Submit
          </SubmitButton>
        </ButtonWrapper>
      </FormWrapper>
    </>
  );
};
export default CreateUserForm;
