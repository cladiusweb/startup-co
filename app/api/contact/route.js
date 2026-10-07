import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, companyName, workEmail, interest, message } = body;

    // Validate essential corporate fields
    if (!fullName || !companyName || !workEmail) {
      return NextResponse.json(
        {
          success: false,
          error: "Lütfen ad soyad, şirket adı ve kurumsal e-posta alanlarını doldurunuz.",
        },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(workEmail)) {
      return NextResponse.json(
        {
          success: false,
          error: "Lütfen geçerli bir kurumsal e-posta adresi giriniz.",
        },
        { status: 400 }
      );
    }

    // Simulated short database processing latency (approx 500ms)
    await new Promise((resolve) => setTimeout(resolve, 550));

    const referenceId = `REQ-${Date.now().toString(36).toUpperCase()}`;

    return NextResponse.json(
      {
        success: true,
        referenceId,
        message: "Talebiniz alınmıştır. Ekibimiz en kısa sürede iletişime geçecektir.",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "İletişim talebi işlenirken bir sorun oluştu. Lütfen tekrar deneyiniz.",
      },
      { status: 500 }
    );
  }
}
