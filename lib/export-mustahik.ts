import { request } from "@/lib/axios";
import { MustahikFilters } from "@/components/mustahik-filters-provider";

export async function exportMustahik(
  payload: Omit<MustahikFilters, "searchName" | "page" | "pageSize">
) {
  try {
    const response = await request.post("/api/Mustahik/export", payload, {
      method: "GET",
      responseType: "blob",
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");

    link.href = url;
    link.setAttribute("download", `${Date.now()}.xlsx`);

    document.body.appendChild(link);
    link.click();

    console.log("clicked");

    link.remove();
  } catch (error) {
    //
  }
}
