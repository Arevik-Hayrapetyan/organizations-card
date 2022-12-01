import React from "react";
import { useParams } from "react-router-dom";
import { selectOrganizations } from "../../redux/slices/organizationSlice";
import { useSelector } from "react-redux";
import { Root } from "./style";

const CompanyPage = () => {
    const companies = useSelector(selectOrganizations);
    const params = useParams();
    const foundedCompany = companies.find((item) => item.id === params.companyId);

    return (
        <Root>
          <div className="companyCard">
            <h2>Company Name {foundedCompany.name}</h2>
            <p>Company Id {params.companyId}</p>
            </div>
        </Root>
    );
};

export default CompanyPage;
