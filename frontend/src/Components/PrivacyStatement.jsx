const PrivacyStatement = () => {
  const farmName = "Local Farm";
  const effectiveDate = "August 26, 2025";
  const lastUpdated = "August 26, 2025";

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <header className="mb-10">
        <h2 className="text-gray-900">
          Privacy Policy
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          <span className="font-medium">Effective Date:</span> {effectiveDate}{" "}
          <br /> <span className="font-medium">Last Updated:</span>{" "}
          {lastUpdated}
        </p>
      </header>

      <section className="space-y-8 text-gray-700">
        <p>
          {farmName} (“we,” “our,” or “us”) respects your privacy. This Privacy
          Policy explains how we collect, use, and protect the personal
          information you provide to us when you visit our website, attend our
          events, or purchase our products.
        </p>

        <div>
          <h4 className="text-gray-900">
            1. Information We Collect
          </h4>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <span className="font-medium">
                Personal Information you provide:
              </span>{" "}
              name, email address, phone number, billing/shipping details when
              you sign up for our newsletter, register for events or camps, or
              place an order.
            </li>
            <li>
              <span className="font-medium">Non-Personal Information:</span>{" "}
              browser, device, and usage data (via cookies or analytics tools)
              to help improve the site.
            </li>
            <li>
              <span className="font-medium">Event &amp; Camp Information:</span>{" "}
              if you register yourself or your children, we may collect
              emergency contacts, allergies, or dietary restrictions.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-900">
            2. How We Use Your Information
          </h4>
          <ul className="mt-1 list-disc space-y-2 pl-6">
            <li>Process and fulfill orders, registrations, and payments.</li>
            <li>
              Communicate about events, camps, product updates, and promotions.
            </li>
            <li>Improve our website, offerings, and community programs.</li>
            <li>Comply with legal and safety requirements.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-900">
            3. Sharing of Information
          </h4>
          <p className="mt-1">
            We do <span className="font-semibold">not sell or rent</span>{" "}
            personal information. We may share information only with:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              Trusted service providers (e.g., payment, email, hosting) who
              assist our operations.
            </li>
            <li>Authorities when required by law or legal process.</li>
            <li>
              Parties necessary to protect the safety of our customers, staff,
              or community.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-900">
            4. Cookies &amp; Tracking
          </h4>
          <h6 className="mt-1">
            We may use cookies or similar technologies to understand traffic and
            improve user experience. You can disable cookies in your browser
            settings, but some features may not function properly.
          </h6>
        </div>

        <div>
          <h4 className="text-gray-900">
            5. Children’s Privacy
          </h4>
          <h6 className="mt-1">
            We welcome families to our events and camps. We collect children’s
            information only as needed for registration and safety, and with a
            parent/guardian’s consent. We do not knowingly collect personal
            information from children online.
          </h6>
        </div>

        <div>
          <h4 className="text-gray-900">
            6. Data Security
          </h4>
          <h6 className="mt-1">
            We take reasonable steps to protect personal information; however,
            no method of online transmission or storage is 100% secure.
          </h6>
        </div>

        <div>
          <h4 className="text-gray-900">
            7. Your Choices
          </h4>
          <ul className="mt-1 list-disc space-y-2 pl-6">
            <h6>
            <li>
              Unsubscribe from marketing emails at any time (see unsubscribe
              link).
            </li>
            <li>
              Request access, correction, or deletion of your personal
              information by contacting us.
            </li>
            </h6>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-900">
            8. Changes to This Policy
          </h4>
          <h6 className="mt-1">
            We may update this Privacy Policy from time to time. The most recent
            version will always be posted here with the “Last Updated” date.
          </h6>
        </div>

        <div>
          <h4 className="text-gray-900">9. Contact Us</h4>
          <address className="mt-3 not-italic">
            <div className="font-medium">{farmName}</div>
            <div>1234 Main St, Tallahassee, FL 32301</div>
            <div>+1 (800) 123-4567</div>
            <div>
              <a className="underline" href="mailto:info@localfarm.com">
                info@localfarm.com
              </a>
            </div>
            
          </address>
        </div>
      </section>
    </main>
  );
};

export default PrivacyStatement;
