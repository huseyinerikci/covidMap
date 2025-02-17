import { createAsyncThunk } from "@reduxjs/toolkit";
import { detailApi } from "../utils/api";
import axios from "axios";

export const getDetails = createAsyncThunk(
  "covid/getDetails",
  async (country) => {
    const req1 = detailApi.get("/statistics", { params: { country } });
    const req2 = axios.get(`https://restcountries.com/v3.1/name/${country}`);
    //istekleri aynı anda atmak için (promise.all)
    const [res1, res2] = await Promise.all([req1, req2]);

    const covidData = res1.data.response[0];
    const countryData = res2.data[0];

    const data = {
      continent: covidData.continent,
      country: covidData.country,
      capital: countryData.capital[0],
      //nesneyi diziye çevirme  ilk elmanı alma
      currency: Object.entries(countryData.currencies)[0][1].name,
      day: covidData.day,
      cases: covidData.cases.total,
      deaths: covidData.deaths.total,
      tests: covidData.tests.total,
      population: covidData.population,
      flag: countryData.flags,
    };

    return data;
  }
);
