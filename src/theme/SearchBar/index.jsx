import React from 'react';
import SearchBar from '@theme-original/SearchBar';
import AskCookbook from "@cookbookdev/docsbot/react";

// It's a public API key, so it's fine to just hardcode it here,
const COOKBOOK_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjhkNGVmMTQ5ODQ2YjcxMDdjYzEyZDUiLCJpYXQiOjE3MjA1MzY4MTcsImV4cCI6MjAzNjExMjgxN30.RArVfTI-iEvHuTH8gRzfwHuFHeETUv8YIsvDp2Kv3sE";

export default function SearchBarWrapper(props) {
  return (
    <>
      <SearchBar {...props} />
      <AskCookbook apiKey={COOKBOOK_API_KEY} />
    </>
  );
}
