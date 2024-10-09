import React from 'react';

const countryCodes = [
    { code: '+1', name: 'United States' },
    { code: '+7', name: 'Russia' },
    { code: '+20', name: 'Egypt' },
    { code: '+27', name: 'South Africa' },
    { code: '+30', name: 'Greece' },
    { code: '+31', name: 'Netherlands' },
    { code: '+32', name: 'Belgium' },
    { code: '+33', name: 'France' },
    { code: '+34', name: 'Spain' },
    { code: '+36', name: 'Hungary' },
    { code: '+39', name: 'Italy' },
    { code: '+40', name: 'Romania' },
    { code: '+41', name: 'Switzerland' },
    { code: '+44', name: 'United Kingdom' },
    { code: '+45', name: 'Denmark' },
    { code: '+46', name: 'Sweden' },
    { code: '+47', name: 'Norway' },
    { code: '+48', name: 'Poland' },
    { code: '+49', name: 'Germany' },
    { code: '+51', name: 'Peru' },
    { code: '+52', name: 'Mexico' },
    { code: '+53', name: 'Cuba' },
    { code: '+54', name: 'Argentina' },
    { code: '+55', name: 'Brazil' },
    { code: '+56', name: 'Chile' },
    { code: '+57', name: 'Colombia' },
    { code: '+58', name: 'Venezuela' },
    { code: '+60', name: 'Malaysia' },
    { code: '+61', name: 'Australia' },
    { code: '+62', name: 'Indonesia' },
    { code: '+63', name: 'Philippines' },
    { code: '+64', name: 'New Zealand' },
    { code: '+65', name: 'Singapore' },
    { code: '+66', name: 'Thailand' },
    { code: '+81', name: 'Japan' },
    { code: '+82', name: 'South Korea' },
    { code: '+84', name: 'Vietnam' },
    { code: '+86', name: 'China' },
    { code: '+90', name: 'Turkey' },
    { code: '+91', name: 'India' },
    { code: '+92', name: 'Pakistan' },
    { code: '+93', name: 'Afghanistan' },
    { code: '+94', name: 'Sri Lanka' },
    { code: '+95', name: 'Myanmar' },
    { code: '+98', name: 'Iran' },
    { code: '+211', name: 'South Sudan' },
    { code: '+212', name: 'Morocco' },
    { code: '+213', name: 'Algeria' },
    { code: '+216', name: 'Tunisia' },
    { code: '+218', name: 'Libya' },
    { code: '+220', name: 'Gambia' },
    { code: '+221', name: 'Senegal' },
    { code: '+222', name: 'Mauritania' },
    { code: '+223', name: 'Mali' },
    { code: '+224', name: 'Guinea' },
    { code: '+225', name: 'Ivory Coast' },
    { code: '+226', name: 'Burkina Faso' },
    { code: '+227', name: 'Niger' },
    { code: '+228', name: 'Togo' },
    { code: '+229', name: 'Benin' },
    { code: '+230', name: 'Mauritius' },
    { code: '+231', name: 'Liberia' },
    { code: '+232', name: 'Sierra Leone' },
    { code: '+233', name: 'Ghana' },
    { code: '+234', name: 'Nigeria' },
    { code: '+235', name: 'Chad' },
    { code: '+236', name: 'Central African Republic' },
    { code: '+237', name: 'Cameroon' },
    { code: '+238', name: 'Cape Verde' },
    { code: '+239', name: 'São Tomé and Príncipe' },
    { code: '+240', name: 'Equatorial Guinea' },
    { code: '+241', name: 'Gabon' },
    { code: '+242', name: 'Congo (Brazzaville)' },
    { code: '+243', name: 'Congo (Kinshasa)' },
    { code: '+244', name: 'Angola' },
    { code: '+245', name: 'Guinea-Bissau' },
    { code: '+246', name: 'Diego Garcia' },
    { code: '+248', name: 'Seychelles' },
    { code: '+249', name: 'Sudan' },
    { code: '+250', name: 'Rwanda' },
    { code: '+251', name: 'Ethiopia' },
    { code: '+252', name: 'Somalia' },
    { code: '+253', name: 'Djibouti' },
    { code: '+254', name: 'Kenya' },
    { code: '+255', name: 'Tanzania' },
    { code: '+256', name: 'Uganda' },
    { code: '+257', name: 'Burundi' },
    { code: '+258', name: 'Mozambique' },
    { code: '+260', name: 'Zambia' },
    { code: '+261', name: 'Madagascar' },
    { code: '+262', name: 'Réunion' },
    { code: '+263', name: 'Zimbabwe' },
    { code: '+264', name: 'Namibia' },
    { code: '+265', name: 'Malawi' },
    { code: '+266', name: 'Lesotho' },
    { code: '+267', name: 'Botswana' },
    { code: '+268', name: 'Eswatini' },
    { code: '+269', name: 'Comoros' },
    { code: '+290', name: 'Saint Helena' },
    { code: '+291', name: 'Eritrea' },
    { code: '+297', name: 'Aruba' },
    { code: '+298', name: 'Faroe Islands' },
    { code: '+299', name: 'Greenland' },
];


interface InputFieldProps {
    type?: string;
    id: string;
    name: string;
    value?: string | number;
    placeholder?: string;
    required?: boolean;
    className?: any;
    dropdownOptions?: string[];
    isPhone?: boolean;
    countryCode?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onCountryCodeChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void; // New prop for country code change
}

const InputField: React.FC<InputFieldProps> = ({
    type = 'text',
    id,
    name,
    value,
    placeholder,
    required = false,
    dropdownOptions,
    className,
    isPhone = false,
    countryCode = '+234',
    onChange,
    onCountryCodeChange, // Pass handler for country code change
}) => {
    return (
        <>
            {dropdownOptions ? (
                <select
                    id={id}
                    name={name}
                    value={value}
                    required={required}
                    onChange={onChange}
                    className="placeholder:text-xs font-semibold bg-white w-full border border-gray-300 dark:border-gray-700 pl-1 md:pl-3 py-2 shadow-sm rounded text-xs md:text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100 "
                >
                    <option value="" disabled>
                        {placeholder}
                    </option>
                    {dropdownOptions.map((option, index) => (
                        <option className='font-semibold' key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            ) : isPhone ? (
                <div className="flex items-center">
                    <select
                        value={countryCode}
                        onChange={onCountryCodeChange} // Update country code
                        className="w-36 md:w-44 bg-gray-200 text-gray-700 border border-gray-300 dark:border-gray-700 py-2 px-3 rounded-l focus:outline-none"
                    >
                        {countryCodes.map((country, index) => (
                            <option key={index} value={country.code}>
                                {country.name} ({country.code})
                            </option>
                        ))}
                    </select>
                    <input
                        type="number"
                        id={id}
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        required={required}
                        onChange={onChange}
                            className="placeholder:text-xs bg-white w-full border border-gray-300 dark:border-gray-700 pl-1 md:pl-3 py-2 shadow-sm rounded-r text-xs md:text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100"
                    />
                </div>
            ) : (
                <input
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    required={required}
                    onChange={onChange}
                            className="placeholder:text-xs bg-white w-full border border-gray-300 dark:border-gray-700 pl-1 md:pl-3 py-2 shadow-sm rounded text-xs md:text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100"
                />
            )}
        </>
    );
};

export default InputField;
