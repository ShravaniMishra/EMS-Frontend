import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authUrl, baseUrl, url } from "../App";
import { getPrevEmpData } from "../functions/utils";

const initialState = {
  user: null,
  employees: [],
  isLoading: false,
  isError: false,
  token: null,
  edit: false,
};

export const addEmploymentData = createAsyncThunk(
  "app/addEmploymentData",
  async (data, thunkApi) => {
    const { token } = thunkApi.getState();
    try {
      // console.log(`${baseUrl}prev_empl/${data.emp_id}`);
      // console.log(token, "token");
      let response = await fetch(`${baseUrl}prev_empl/${data.emp_id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
        body: JSON.stringify(data),
      });
      // console.log("Added Data Successfully", response);
    } catch (error) {
      console.log("Error while Adding prev employment data", error);
    }
  }
);
export const deleteEmploymentData = createAsyncThunk(
  "app/deleteEmploymentData",
  async (data, thunkApi) => {
    const { token } = thunkApi.getState();
    const { id, cb, emp_id } = data;
    try {
      let response = await fetch(`${baseUrl}prev_empl/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      });
      getPrevEmpData(emp_id, token, cb);
      // console.log("Delete Data Successfully", response);
    } catch (error) {
      console.log("Error while Deleting prev employment data", error);
    }
  }
);

export const adminLogin = createAsyncThunk("app/adminLogin", async (cred) => {
  // console.log(cred, "cred");
  try {
    const response = await fetch(authUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(cred),
    });
    const data = await response.json();
    // console.log(data, "admin login data");
    return data;
  } catch (error) {
    console.log("Error while admin login", error);
  }
});

export const addEmployee = createAsyncThunk(
  "app/addEmployee",
  async (employee, thunkApi) => {
    const state = thunkApi.getState();
    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: state.token,
        },
        body: JSON.stringify(employee),
      });
      thunkApi.dispatch(getEmployees());
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteEmployee = createAsyncThunk(
  "app/deleteEmployee",
  async (id, thunkApi) => {
    const { token } = thunkApi.getState();
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
          token,
        },
      });
      thunkApi.dispatch(getEmployees());
      // console.log(response);
    } catch (error) {
      console.log("Error while deleting employee", error);
    }
  }
);

export const getEmployees = createAsyncThunk(
  "app/getEmployees",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    try {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          token: state.token,
        },
      });
      const employees = await response.json();
      return employees;
    } catch (error) {
      // console.log("Error fetching employee", error);
    }
  }
);

export const getEmploymentData = createAsyncThunk(
  "app/getEmploymentData",
  async (emp_id, thunkApi) => {
    const state = thunkApi.getState();
    try {
      const response = await fetch(`${baseUrl}prev_empl/${emp_id}`, {
        headers: {
          token: state.token,
        },
      });
      const data = await response.json();
      // console.log("Prev Emp Data", data);
      return data;
    } catch (error) {
      console.log("Error fetching previous employment data", error);
    }
  }
);

export const updateEmployeeData = createAsyncThunk(
  "app/updateEmployeeData",
  async (data, thunkApi) => {
    const state = thunkApi.getState();
    const { _id } = data;
    try {
      const response = await fetch(`${url}/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          token: state.token,
        },
        body: JSON.stringify(data),
      });
      // console.log("Updated Data", await response.json());
      return data;
    } catch (error) {
      console.log("Error fetching Updating Data", error);
    }
  }
);

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addEmployee.rejected, (state) => {
        state.isError = true;
      })
      .addCase(addEmployee.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getEmployees.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEmployees.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getEmployees.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.employees = action.payload;
      })
      .addCase(adminLogin.pending, (state) => {})
      .addCase(adminLogin.fulfilled, (state, action) => {
        if (action?.payload?.token) {
          state.user = "admin";
          state.token = action.payload.token;
        }
      });
  },
});

export const {} = appSlice.actions;

export const appReducer = appSlice.reducer;
