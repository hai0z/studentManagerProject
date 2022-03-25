import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import "../Login/login.styles.scss";
import { defaultLogin } from "./login.type";

const resetLogin = {
  emailAddress: "",
  password: "",
  rememberClient: false,
};
const formSchema = Yup.object().shape({
  emailAddress: Yup.string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is mendatory")
    .min(4, "Password must be atleast 4 characters long"),
});
const LoginPage = () => {
  const formOptions = { resolver: yupResolver(formSchema) };
  const { reset, control, handleSubmit } = useForm<defaultLogin>(formOptions);

  const onSubmit = (data: defaultLogin) => {
    console.log("submit: ", data);
    reset(resetLogin);
  };
  return (
    <Box className="container">
      <Box className="content-box">
        <Box className="login-form">
          <h1 className="login-tittle">Login</h1>
          <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <Controller
                name="emailAddress"
                control={control}
                defaultValue=""
                render={({ field, fieldState }) => (
                  <TextField
                    className="input-field"
                    InputProps={{
                      style: { fontSize: "20px" },
                    }}
                    InputLabelProps={{
                      style: { fontSize: "20px" },
                    }}
                    margin="normal"
                    label="Email address"
                    value={field.value}
                    color="secondary"
                    onChange={field.onChange}
                    inputRef={field.ref}
                    error={!!fieldState.error}
                    helperText={
                      fieldState.error ? fieldState.error.message : null
                    }
                    fullWidth
                  />
                )}
                rules={{ required: true }}
              />
            </Box>
            <Box>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field, fieldState }) => (
                  <TextField
                    className="input-field"
                    InputProps={{
                      style: { fontSize: "20px" },
                    }}
                    InputLabelProps={{
                      style: { fontSize: "20px" },
                    }}
                    margin="normal"
                    label="Password"
                    type="password"
                    value={field.value}
                    color="secondary"
                    onChange={field.onChange}
                    inputRef={field.ref}
                    error={!!fieldState.error}
                    helperText={
                      fieldState.error ? fieldState.error.message : null
                    }
                    fullWidth
                  />
                )}
                rules={{ required: true }}
              />
            </Box>
            <Box>
              <Controller
                name="rememberClient"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...field}
                        sx={{
                          color: "#6868ac",
                          "&.Mui-checked": {
                            color: "#6868ac",
                          },
                        }}
                      />
                    }
                    label={
                      <Box component="div" fontSize={20}>
                        Remember me
                      </Box>
                    }
                  />
                )}
              />
            </Box>
            <Box>
              <Button className="submitButton" type="submit">
                Login
              </Button>
            </Box>
          </form>
        </Box>
        <Box className="login-welcome">
          <Box sx={{ width: "60%", margin: "auto", padding: "24% 0px" }}>
            <h1 className="welcome-tittle">
              WELCOME TO ACADEMY OF RAYA LUCARIA
            </h1>
            <Box className="quote-box">
              <Box className="scroll-box">
                <p>
                  Hush, little culver.
                  <br />
                  I'll soon birth thee anew, a sweeting fresh and pure...
                  <br />
                  Ahh, my beloved...
                  <br />
                  Have no fear, I will hold thee. Patience.
                  <br />
                  Ye will be countless born, forever and ever.
                  <br />
                  Upon my name as Ranni the Witch.
                  <br />
                  Mother's rich slumber shall not be disturbed by thee.
                  <br />
                  Foul trespasser.
                  <br />
                  Send word far and wide.
                  <br />
                  Of the last Queen of Caria, Rennala of the Full Moon.
                  <br />
                  And the majesty of the night she conjureth
                  <br />
                  Oh little Ranni, my dear daughter.
                  <br />
                  Weave thy night into being.
                  <br />
                  -RENNALA-
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
