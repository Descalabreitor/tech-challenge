import { Company } from "../types/Company";
import { User } from "../types/User";

function assignCompanyNames(users: User[], companies: Company[]): User[] {
  const companyMap: { [key: number]: string } = {};

  companies.forEach((company) => {
    companyMap[company.id] = company.name;
  });

  const updatedUsers = users.map((user) => ({
    ...user,
    company: companyMap[user.companyId] || "Company not assigned",
  }));

  return updatedUsers;
}

export default assignCompanyNames;
