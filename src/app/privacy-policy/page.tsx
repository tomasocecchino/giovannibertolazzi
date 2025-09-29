
export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#f0f0f0] text-black animate-in fade-in duration-500">
      <div className="container py-16 md:py-24 pt-32 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold font-headline text-[#004165] mb-8">
          Privacy Policy
        </h1>
        <p className="text-sm text-black/60 mb-8">Last updated: 30/09/2025</p>

        <div className="space-y-6 text-base text-gray-800 leading-relaxed">
          <p>
            This policy describes how the personal data of users who visit Giovanni Bertolazzi's personal website (“the Site”) is collected, used, and protected. Respect for your privacy is very important, and we are committed to treating your personal data with transparency, fairness, and security.
          </p>

          <h2 className="text-2xl font-semibold font-headline text-[#004a63] pt-4">
            1. What data we collect
          </h2>
          <p>
            While you browse, we automatically collect certain technical information, including:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>IP address</li>
            <li>Browser type and settings</li>
            <li>Pages visited and time spent on the site</li>
            <li>Aggregated browsing data</li>
          </ul>

          <h3 className="text-xl font-semibold font-headline text-[#004a63] pt-2">
            Cookies
          </h3>
          <p>
            The site uses cookies and similar technologies to improve the browsing experience, analyze traffic, and personalize content. You can manage your cookie preferences through your browser settings.
          </p>

          <h2 className="text-2xl font-semibold font-headline text-[#004a63] pt-4">
            2. How we use your information
          </h2>
          <p>
            The data collected is used to:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Responding to contact or information requests</li>
            <li>Managing occasional communications, such as updates on projects or events (only if you have given your consent)</li>
            <li>Improving the functioning of the site and the user experience</li>
            <li>Complying with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold font-headline text-[#004a63] pt-4">
            3. Data sharing
          </h2>
          <p>
            Your personal data will not be sold or rented. It may only be shared with:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Technical and hosting service providers that support the functioning of the website</li>
            <li>Competent authorities, only when required to comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold font-headline text-[#004a63] pt-4">
            4. Data security
          </h2>
          <p>
            We take technical and organizational security measures to protect your personal data from unauthorized access, disclosure, alteration, or loss.
          </p>

          <h2 className="text-2xl font-semibold font-headline text-[#004a63] pt-4">
            5. Your rights
          </h2>
          <p>
            Under applicable law (e.g., GDPR, if you are an EU resident), you have the right to:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Access your personal data</li>
            <li>Request its correction or deletion</li>
            <li>Restrict or object to its processing</li>
            <li>Withdraw your consent (where applicable)</li>
            <li>Lodge a complaint with the competent data protection authority</li>
          </ul>
          <p>
            For any requests regarding your data, you can write to: <a href="mailto:info@giovannibertolazzi.com" className="text-[#004a63] hover:underline">info@giovannibertolazzi.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
