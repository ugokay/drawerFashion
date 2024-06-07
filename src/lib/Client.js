
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { BASE_URL } from "./constants";




export const Client = new ApolloClient({
    uri: BASE_URL,
    headers: {
        authorization : `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjliMTU0ZWZkNWNlYzAwMzI2OGI3YyIsImVtYWlsIjoidGZhc2hpb25fZGV2QHRmYXNoaW9uLmFpIiwib3JnYW5pemF0aW9uIjoiNjVhMTZhNmY5ZTI4MjY1NWQwMGNiZjg5IiwiYWN0aW9uIjoiQUNDRVNTX1RPS0VOIiwicm9sZSI6ImN1c3RvbWVyIiwidG9rZW5WZXJzaW9uIjoidjEuMC4yIiwib3JnYW5pemF0aW9uUm9sZSI6IkFETUlOIiwiaWF0IjoxNzE3NjYxOTUyLCJleHAiOjE3MTc5MjExNTIsImF1ZCI6InByb2R1Y3Rpb24iLCJpc3MiOiJULUZhc2hpb24iLCJzdWIiOiJ0ZmFzaGlvbl9kZXZAdGZhc2hpb24uYWkifQ.nzKeW2PH1j7M9OmekVRt295Df-iFB5aWworY7nBbcclSZxoHoUfSk6yyGdLffhdgZ7oIAC4_S6RHQ59PgOXDvls7j8IFi6mtTa8V-xnPdKl_G1GRx4aZWaWNUAwGngeYEsir-PNGCyT_MCJNpML4kE4ld9u7cL5JKAnJF5HrFE7ArrzvJzF6oeJBNzfjvCs1rMdudnpk1Erl-LiwM-5Mgceiz9joNt-rKI2lHsmai7Yr_d_WMchMGgNuGXUj844fa2L_quR_IkjBi5_yjXINADcjkKOIB9vDhtLgerGHoje014o9GmgQPOluyJG0a68IgUGdxDGFk8rJDet_WF4ROg`,
    },
    cache: new InMemoryCache(),
});


