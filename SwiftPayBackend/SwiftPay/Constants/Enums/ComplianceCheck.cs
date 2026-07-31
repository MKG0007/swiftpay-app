namespace SwiftPay.Constants.Enums
{
    public enum ComplianceCheckType
    {
        Sanctions = 1,
        PEP = 2,
        AML = 3,
        Geo = 4
    }

    public enum ComplianceResult
    {
        Pending = 1,
        Clear = 2,
        Flag = 3,
        Hold = 4
    }

    public enum ComplianceSeverity
    {
        Low = 1,
        Medium = 2,
        High = 3
    }
}